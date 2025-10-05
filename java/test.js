const jopa = document.getElementById('poto')
const job = document.querySelector('input[type="file"]').addEventListener('change', function() {
  next.push(this.files[0].name);
});
const next = []
i = 0;
 //var newtest = job('input[type="file"]').addEventListener('change', function() {
   //  next.push(this.files[0].name);
 // });


  function jmi(){
    jopa.innerHTML = `<img  src="image/${next[i]}">`;
i++
  }