
const m=new Date().getMonth()+1;
const season=m<=2||m===12?'winter':m<=5?'spring':m<=8?'summer':'autumn';
document.documentElement.dataset.season=season;
