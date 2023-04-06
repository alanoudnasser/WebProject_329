/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const loginBtn = document.getElementById('login-btn');
const re = document.getElementById("er")

loginBtn.addEventListener('click', () => {


    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    if (email === "" && password === "") {
        re.append("Please enter your Email and password")
    } else {
        if (role === 'home-seeker') {
            window.location.href = 'home-seeker.html';

        } else if (role === 'homeowner') {
            window.location.href = 'homeowner.html';
        }
    }

});
