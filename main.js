
async function main(){
    console.log("Loading...");
    const timer = ms => new Promise( res => setTimeout(res, ms));
    await timer(2000);
    console.log("Welcome, "+require("os").userInfo().username+".");
    console.log("The date is: "+new Date().toDateString()+".");
    console.log("Running tests.");
    "".tableView("1 + 1", Number(1).add(1));
    "".tableView("1 / 0", Number(1).divide(0));
    console.log("Testing if: [1, 2, 3, 4 ,5 ,6, 7, 8, 9, 10] is even.");
    await "".FOR([1, 2, 3, 4, 5, 6 ,7 ,8, 9, 10], ((v, i) => "".IF(v.isEven(), () => {console.log(v+" is even")}, () => {console.log(v+" is not even")})));

    "".tableView("RANDOM + RANDOM", Number(Math.random()*100).add(Math.random()*100));
    "".tableView("RANDOM - RANDOM", Number(Math.random()*100).subtract(Math.random()*100));
    "".tableView("RANDOM / RANDOM", Number(Math.random()*100).divide(Math.random()*100));
    "".tableView("RANDOM * RANDOM", Number(Math.random()*100).multiply(Math.random()*100));
    "".tableView("RANDOM % RANDOM", Number(Math.random()*100).modulo(Math.random()*100));
}
(async function() {
    await main();
})();
