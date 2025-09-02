1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
getElementByID                        getElementsByClassName                           querySelector / querySelectorAll
Selects one Element by ID             Select one or more Elements by Class             Select elements using CSS selectors

2.How do you create and insert a new element into the DOM?

Use createElement to create a new HTML element.Then use textContent or innerHTML to add text or HTML inside it. At last Use appendChild, prepend, or insertBefore to insert the element into the DOM.

3.What is Event Bubbling and how does it work?

Event Bubbling is a way that events propagate (bubble up) through the DOM from the element that triggered the event to its ancestors, all the way up to the <html> or document object.

Event Bubbling works as follows:

The event is triggered on the target element.

The event propagates upward from the target to its parent elements, then to the document and html.

Each ancestor element along the path can handle the event if it has an event listener.

The propagation can be stopped using event.stopPropagation().

It allows event delegation, handling events for multiple child elements via a single parent listener.


What is Event Delegation in JavaScript? Why is it useful?

Event Delegation in JavaScript is a technique where you attach a single event listener to a parent element to handle events for its current and future child elements, instead of attaching separate listeners to each child.

Why it is useful:

Efficiency: Fewer event listeners → better performance, especially with many child elements.

Dynamic elements: Works for elements added to the DOM later, after the page loads.

Simpler code: Easier to manage one listener on a parent than many on children.

Memory-friendly: Reduces memory usage by avoiding multiple listeners.


What is the difference between preventDefault() and stopPropagation() methods?
preventDefault()

Purpose: Stops the default browser action for an event.

Example behavior it stops: Submitting a form, opening a link, right-click menu, etc.

Does not affect event bubbling.

stopPropagation()

Purpose: Stops the event from propagating (bubbling or capturing) to ancestor elements.

Does not prevent the default browser action.