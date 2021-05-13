

import bank from "./bank.js"

var mybank = bank();
var button_create = document.getElementById("create_on")
var button_deposit = document.getElementById("deposit_on")
var button_withdraw = document.getElementById("withdraw_on")
var button_remit = document.getElementById("remit_on")
var button_lookup = document.getElementById("lookup_on")

button_create.addEventListener("click", () => createBtn());
button_deposit.addEventListener("click", () => depositBtn());

button_withdraw.addEventListener("click", () => withdrawBtn());
button_remit.addEventListener("click", () => remitBtn());
button_lookup.addEventListener("click", () => lookupBtn());

var box = document.getElementById("box")

function deleteAll_child(div) {
    while (div.hasChildNodes())
        div.removeChild(box.firstChild);

}

function onBtn(innerText, onclickEvent) {
    var box = document.getElementById("box")

    deleteAll_child(box);
    box.innerHTML = innerText;
    var button = document.getElementById("btn")
    button.addEventListener("click", () =>
        onclickEvent());
}


function createBtn() {


    var innerText = `<div>
                        <p> 이름 </p>
                        <input type="text" id="name" name="name" required minlength="2" maxlength="8" size="10">
                        <p> 비밀번호 </p>
                        <input type="number" id="password" name="password" required minlength="4" maxlength="4" size="10">
                    </div>
        <button id="btn"> 계좌 생성하기</button>
        `;
    function onclick() {
        var button = document.getElementById("btn")

        var name = document.getElementById("name").value
        var password = document.getElementById("password").value
        button.addEventListener("click", () => {

            deleteAll_child(box);
            box.innerHTML = `<div>
                                <p>${name}님의 계좌번호는 [${mybank.createAccount(name, password)}] 입니다.</p>
                            </div>
        <button id="btn"> 확인</button>`;
            button = document.getElementById("btn")
            button.addEventListener("click", () =>
                createBtn());
        });
    }
    onBtn(innerText, onclick)
}


function depositBtn() {


    var innerText = `<div>
                        <p> 계좌번호 </p>
                        <input type="number" id="accountId" name="accountId" required minlength="2" maxlength="8" size="10">
                            
                        <p> 비밀번호 </p>
                        <input type="number" id="password" name="password" required minlength="4" maxlength="4" size="10">
                            
                        <p> 입금할 금액 </p>
                        <input type="number" id="money" name="money" size="10">
                    </div>
        <button id="btn"> 입금하기</button>
        `;

    function onclick() {
        var accountId = document.getElementById("accountId").value
        var password = document.getElementById("password").value
        var money = document.getElementById("money").value
        deleteAll_child(box);
        if (!mybank.depositAccount(accountId, money, password)) {
            box.innerHTML = `<div>
                                <p>에러가 발생했습니다.</p>
                            </div>
            <button id="btn"> 확인</button>`;
        }
        else {
            box.innerHTML = `<div>
                                <p>
                                ${mybank.getName(accountId)}님의 계좌로 ${parseInt(money)}원을 입금했습니다.<br/>
                                ${mybank.getName(accountId)}님의 계좌 잔고는 [${parseInt(mybank.lookupAccount(accountId, password).balance)}]원 입니다.
                                </p>
                            </div> 
           <button id="btn"> 확인</button>`;
        }
        var button = document.getElementById("btn")
        button.addEventListener("click", () =>
            depositBtn());
    }

    onBtn(innerText, onclick)
}


function withdrawBtn() {


    var innerText = `<div>
                        <p> 계좌번호 </p>
                        <input type="number" id="accountId" name="accountId" required minlength="2" maxlength="8" size="10">
                            
                        <p> 비밀번호 </p>
                        <input type="number" id="password" name="password" required minlength="4" maxlength="4" size="10">
                            
                        <p> 출금할 금액 </p>
                        <input type="number" id="money" name="money" size="10">
                    </div>
        <button id="btn"> 출금하기</button>
        `;

    function onclick() {
        var accountId = document.getElementById("accountId").value
        var password = document.getElementById("password").value
        var money = document.getElementById("money").value
        deleteAll_child(box);
        if (!mybank.withdrawAccount(accountId, money, password)) {
            box.innerHTML = `<div>
                                <p>에러가 발생했습니다.</p>
                            </div>
            <button id="btn"> 확인</button>`;
        }
        else {
            box.innerHTML = `<div>
                                <p>
                                ${mybank.getName(accountId)}님의 계좌에서 ${parseInt(money)}원을 출금했습니다.<br/>
                                ${mybank.getName(accountId)}님의 계좌 잔고는 [${parseInt(mybank.lookupAccount(accountId, password).balance)}]원 입니다.
                                </p>
                            </div> 
           <button id="btn"> 확인</button>`;
        }
        var button = document.getElementById("btn")
        button.addEventListener("click", () =>
            withdrawBtn());
    }

    onBtn(innerText, onclick)
}


function remitBtn() {


    var innerText = `<div>
                        <p> 계좌번호 </p>
                        <input type="number" id="fromId" name="fromId" required minlength="2" maxlength="8" size="10">
                            
                        <p> 비밀번호 </p>
                        <input type="number" id="password" name="password" required minlength="4" maxlength="4" size="10">
                            
                        <p> 송금할 계좌번호 </p>
                        <input type="number" id="toId" name="toId" required minlength="2" maxlength="8" size="10">
                            
                        <p> 금액 </p>
                        <input type="number" id="money" name="money" size="10">
                    </div>
        <button id="btn"> 송금하기</button>
        `;

    function onclick() {
        var fromId = document.getElementById("fromId").value
        var toId = document.getElementById("toId").value
        var password = document.getElementById("password").value
        var money = document.getElementById("money").value
        deleteAll_child(box);
        if (!mybank.remitMoney(fromId, toId, money, password)) {
            box.innerHTML = `<div>
                                <p>에러가 발생했습니다.</p>
                            </div>
            <button id="btn"> 확인</button>`;
        }
        else {
            var account = mybank.lookupAccount(fromId, password);
            box.innerHTML = `<div>
                                <p>
                                ${mybank.getName(toId)}님의 계좌로 ${parseInt(money)}원을 송금했습니다.<br/>
                                ${account.name}님의 계좌 잔고는 [${parseInt(account.balance)}]원 입니다.
                                </p>
                            </div>
            <button id="btn"> 확인</button>`;
        }
        var button = document.getElementById("btn")
        button.addEventListener("click", () =>
            remitBtn());
    }

    onBtn(innerText, onclick)
}


function lookupBtn() {


    var innerText = `<div>
                        <p> 계좌번호 </p>
                        <input type="number" id="accountId" name="accountId" required minlength="2" maxlength="8" size="10">
                        
                        <p> 비밀번호 </p>
                        <input type="number" id="password" name="password" required minlength="4" maxlength="4" size="10">
                    </div>
        <button id="btn"> 확인하기</button>
        `;

    function onclick() {
        var accountId = document.getElementById("accountId").value
        var password = document.getElementById("password").value
        deleteAll_child(box);
        if (!mybank.lookupAccount(accountId, password)) {
            box.innerHTML = `<div>
                                <p>에러가 발생했습니다.</p>
                            </div>
            <button id="btn"> 확인</button>`;
        }
        else {
            var account = mybank.lookupAccount(accountId, password);
            box.innerHTML = `<div> 
                                <p>
                                ${account.name}님의 계좌 잔고는 [${parseInt(account.balance)}]원 입니다.
                                </p>
                            </div>
            <button id="btn"> 확인</button>`;
        }
        var button = document.getElementById("btn")
        button.addEventListener("click", () =>
            lookupBtn());
    }

    onBtn(innerText, onclick)
}

