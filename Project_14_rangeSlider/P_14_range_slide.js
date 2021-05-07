const span = document.querySelector('.rangeValue');
const range = document.querySelector('#range');

range.addEventListener('input', (e)=>{
    const val = parseInt(e.target.value);
    const width_range = parseInt(getComputedStyle(e.target).width.replace("px", ""));
    const width_span = parseInt(getComputedStyle(span).width.replace("px", ""));
    const min = e.target.min;
    const max = e.target.max;

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
      }

    const left = val * (width_range / e.target.max) + scale(val, min, max, 10, +30);
    span.style.left=`${left}px`;
    span.textContent = `${val}%`;
    console.log(val, width_range, width_span, left);
})