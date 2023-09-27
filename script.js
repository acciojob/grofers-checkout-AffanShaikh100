const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let table = document.querySelector("table");
	let pricelist = document.querySelectorAll(".price")
	let sum=0;
	for(let i =0; i<pricelist.length; i++){
		sum+=parseInt(pricelist[i].innerText);
	}
	let total = "Total price" + " = "+ sum;
	let lastrow = document.createElement("tr");
    let newcell = document.createElement("td");
	newcell.append(total);
	lastrow.appendChild(newcell);
	table.appendChild(lastrow);
	newcell.textContent = total;
};

getSumBtn.addEventListener("click", getSum);

