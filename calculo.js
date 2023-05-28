const p = document.querySelector("#resultSum");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcuar");
const form = document.querySelector("#form");

// const img = document.createElement('img');
// img.setAttribute('src','https://lh3.googleusercontent.com/cmW0e5-slUFJ1dfXTysbKI9nOm3-Hz4JjJ2FPd-MN2bp-hnwoXxLzUlEzG5XNr6DMV6WwaTQkyZ_-JuGwA0yHcQFKw3IL68r8GPnnK1bAmp1Y9JO0YAUtdUZ1oh69eEM6HO4rBupfbu71-M_WsMfuthVQC6Ed2ceaJVvWMGcGdz6CtE7rvZ8tlNDi96TcxoKEAxsc0PPd_vIZZhzV8Upwx_wzJO00b16nK7uOr8CKwwQV8GANwFY5keKLGM0mTxC5ngVcGJRjKRpwCRNEejaMs-bVBSjukc1AZy8AIbrKUYn1yZ8Xc_V6lki-FmJpZ5WDrCnvjioVyCeaqNPPf4mUMOsZlBOZqoxcJrBpLSmM7qtMQrF3DF2E4gyYp1XukMcMebOPyzs_M0GqR1c6HVd10Q-zHHbDwflLinbQ17Louo1PTqMD2HYk4jRpB43nlJApwuV2B7tZOvOuFU4XFq8qGi4QbbeLHsi-4BxjCCTDxFavGfFYHCeBhdvNK-xGaFT5a5ImaL8U-PutyLFRG_e8Dg-g3qR45nVj4hbf87poNMamsO1NqASem8YQursLNf7IKlNKkbZwjQwAEqn3_Yc0-2416SPDRsbbLIWYCy9Pu0Z0oPt1ua5xMWAMtzxkghBgFd3FuHgr-uZ8hbEo7JLZLjSvOzmpDh0eUj3TkppxKmihqkrOrgVqutz6MIvibFkeIz_EjCC2HPqOrdjotngJqySFZTWPS-f7c1n-mbJcJB3ASNbNv-EWj4dTDnxbhGtFl6vzj_Jgip6tUiolULQn6guQ24Whduxj1nSxi7gSarOj7Z7d2KectqoWGtk2o3P-iN39C4Bx1PtEdr6XZ9STRnpetgXzDCoRXGNpI0gorlfi7xTlcRQ8TFxz8hkV9vJ2W0llfyAJA9owHFMRv5L4QY49XB9UET3RV6JRRLffVSerA=w670-h893-s-no?authuser=0');
// p.appendChild(img);
// btn.addEventListener('click',sumArit2)

form.addEventListener('submit',sumArit2)

// function sumArit2(){
// 	let sum = parseInt(input1.value) + parseInt(input2.value)
// 	return p.innerHTML = "La suma es"+" "+sum
// }

function sumArit2(event){
	event.preventDefault();
	let sum = parseInt(input1.value) + parseInt(input2.value)
	return p.innerHTML = "La suma es"+" "+sum
}

