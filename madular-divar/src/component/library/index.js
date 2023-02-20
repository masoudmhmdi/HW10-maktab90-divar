const El = (options) => {
  let { element, child,...rest } = options;
  let el = document.createElement(element);
  for( let key in rest){
    // console.log(key)
    el[key]=options[key]
  }
  if(child&& Array.isArray(child)) el.append(...child)
  else if(child){
    el.append(child)
  }
  return el;
};

export default El;
