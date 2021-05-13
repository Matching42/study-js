function check_id(limit, id) {
    if (id >= limit|| id < 0) {
        console.log("invalid ID");
        return 0;
    }
    return 1;
}
function check_value(value) {
    if (value < 0) {
        console.log("can't use negative value");
        return 0;
    }
    return 1;
}

function check_password(pass, realpass) {
    if (pass != realpass) {
        console.log("wrong password");
        return 0;
    }
    return 1;
}

function check_balance(balance, value) {
    if (parseInt(balance) < parseInt(value)) {
        console.log(`you have bank balance${balance} is not enough.${value}`);
        return 0;
    }
    return 1;
}


function check_error(accounts, id, value, pass ) {
    if (!check_id(accounts.length, id) || !check_password(pass, accounts[id].password) || !check_balance(accounts[id].balance, value))
        return 0;
    return 1;
}

function bank()
{
    let accounts =[]
    class bankSystem {
        constructor() {
        }
        getName(id) {
            if(!check_id(accounts.length, id))
                return null;
            return accounts[id].name;
        }
        createAccount(name, pass) {
            
            let account = {
                id : accounts.length,
                name: name,
                password : pass,
                balance: 0,
            }
            accounts.push(account);
            return account.id;
        }
        lookupAccount(id, pass) {

            if(!check_id(accounts.length, id) || !check_password(pass, accounts[id].password))
                return 0;
            return accounts[id];
        }
        depositAccount(id, value, pass) {
            if (!check_id(accounts.length, id) || !check_password(pass, accounts[id].password) || !check_value(value))
                return 0;
            accounts[id].balance = parseInt(accounts[id].balance) +parseInt(value);
            return 1;
        }
        withdrawAccount(id, value, pass ) {
            if (!check_error(accounts, id, value, pass)|| !check_value(value))
                return 0;
            accounts[id].balance  = parseInt(accounts[id].balance) -parseInt(value);
            return 1;
        }
        remitMoney(fromId, toId, value, pass) {
            if (!check_error(accounts, fromId, value, pass) || !check_id(accounts.length, toId))
                return 0;
            accounts[fromId].balance = parseInt(accounts[fromId].balance) -parseInt(value);
            accounts[toId].balance= parseInt(accounts[toId].balance) +parseInt(value);
            return 1;
        }

    }
    return new bankSystem();
}

export default bank;