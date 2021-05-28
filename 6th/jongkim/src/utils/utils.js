export function createElem($target, $className) {
	const _elem = document.createElement("div");
	_elem.className = $className;
	$target && $target.appendChild(_elem);
	return _elem;
}
