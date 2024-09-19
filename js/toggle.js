document.getElementById('btn-add-cashOut').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('cashOutForm').classList.remove('hidden');
    document.getElementById('addMoneyForm').classList.add('hidden');

});
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('addMoneyForm').classList.remove('hidden');
    document.getElementById('cashOutForm').classList.add('hidden');

});