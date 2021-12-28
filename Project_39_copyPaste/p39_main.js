document.addEventListener('DOMContentLoaded', () => {
    let text = document.querySelector('.text');
    let btn_copy = document.querySelector('.btn1');
    let btn_selectAll = document.querySelector('.btn2');
    let btn_deselect = document.querySelector('.btn3');

    btn_copy.addEventListener('click', ()=>{
        let selection = window.getSelection();
        let rangeObj = selection.rangeCount === 0 ? null : selection.getRangeAt(0);

        try {
            document.execCommand('copy');
            btn_copy.innerHTML = 'Copied';
            console.log(selection);
            console.log(rangeObj.toString());
        } catch (err) {
            btn_copy.innerHTML = 'Copy';
        } finally {
            selection.removeAllRanges();
        }

    });

    btn_selectAll.addEventListener('click', ()=>{
        let selection = window.getSelection();
        let newRange = document.createRange();
        newRange.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(newRange);

        try {
            document.execCommand('copy');
            btn_selectAll.innerHTML = 'Copied';
            console.log(selection.toString());
        } catch (err) {
            btn_selectAll.innerHTML = 'Copy';
        } finally {
            selection.removeAllRanges();
        }

    });

    btn_deselect.addEventListener('click', e => {
        let selection = window.getSelection();
        selection.removeAllRanges();
    });
});
