var rating =JSON.parse(localStorage.getItem('ratings'))
sum=0
for (let i = 0; i < rating.length; i++) {
    sum = sum + rating[i] 
}
sum = sum/rating.length
console.log(sum);
document.getElementById('rating').innerHTML = sum.toFixed(2);
function fun(n)
{
    var icon =  document.getElementsByClassName('icon')
    for (let i = 0; i <n; i++) {
        icon[i].classList.add('fas')
    }
}
function next(n)
{
    var icon =  document.getElementsByClassName('icon')
    for (let i = 0; i <n; i++) {
        icon[i].classList.remove('fas')
    }
}
function rate(n)
{
    if(localStorage.getItem('ratings')===null)
    {
        var rating =[]
        rating.push(n)
        localStorage.setItem('ratings',JSON.stringify(rating))
        document.getElementById('rating').innerHTML = n;
    }else{
        var rating =JSON.parse(localStorage.getItem('ratings'))
        rating.push(n)
        localStorage.setItem('ratings',JSON.stringify(rating))
        sum = 0
        for (let i = 0; i < rating.length; i++) {
             sum = sum + rating[i] 
        }
        sum = sum/rating.length
        console.log(sum);
        document.getElementById('rating').innerHTML = sum.toFixed(2);
    }
    
}