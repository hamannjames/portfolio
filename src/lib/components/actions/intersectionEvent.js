export function intersectionEvent(node, {id = '', root = null, rootMargin="0px", threshold = '0.1', use = true, trackOffset = false}) {
    if (!use) return;

    console.log(threshold)

    let observer;
    const prefix = id ? id + '-' : '';
    
    const handleIntersect = (e) => {
        const event = prefix + (e[0].isIntersecting ? 'enter' : 'exit');

        node.dispatchEvent(new CustomEvent(event));
    }
    
    observer = new IntersectionObserver(handleIntersect, {root, rootMargin, threshold});
    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    }
}