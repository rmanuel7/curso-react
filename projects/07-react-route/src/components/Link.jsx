import { EVENTS } from '../consts'

function navigate ({ url }) {
    window.history.pushState({}, '', url)
    const pushEvent = new CustomEvent(EVENTS.PUSHTATE, {})
    window.dispatchEvent(pushEvent)
}

export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {
        //! The MouseEvent.button read-only property indicates which button was pressed on the mouse to trigger the event.
        const IsMainButtonPressed = event.button === 0 //! usually the left button
        //! The MouseEvent.metaKey read-only property is a boolean value
        //! that indicates whether the meta key was pressed or not
        //! when a given mouse event occurs.
        const IsMouseEventKeyPressed = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        //! The MouseEvent.relatedTarget read-only property is the secondary target for the mouse event, if there is one.
        const IsMouseEventRelatedTarget = target === undefined || target === '_self'

        if (IsMainButtonPressed && IsMouseEventRelatedTarget && !IsMouseEventKeyPressed) {
            event.preventDefault()
            navigate({ url: to }) //! Navigate with SPA
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}
