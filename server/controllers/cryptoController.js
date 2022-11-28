import crypto from '../models/cryptoModel.js';
import dateFormat from "dateformat"

export const getAll = async (req, res, next) => {

   crypto.find({}).then((result) => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(response => response.json()).then(data => {
        const jsonData = {date: dateFormat(new Date(), "mm/dd/yyyy"), cryptos: []};
        for (let item in data) {
            jsonData.cryptos.push({
                name: data[item].name,
                rate: data[item].current_price}
                );
        }
        crypto.create(jsonData);
        req.crypto = result;
        next();
   })
   }
    ).catch((err) => {
        console.log(err);
    });
}

export const getById = async (req, res, next) => {
    crypto.findById(req.params.id).then((result) => {
        req.crypto = result;
        next();
    }
    ).catch((err) => {
        console.log(err);
    }
    );
}

export const insertCrypto = async(req, res, next) => {
    crypto.create(req.body).then((result) => {
        req.crypto = result;
        next();
    }
    ).catch((err) => {
        console.log(err);
    }
    );
  }

export const deleteCrypto = async(req, res, next) => {
    crypto.deleteOne({_id: req.params.id}).then((result) => {
        req.result = result;
        next();
    }
    ).catch((err) => {
        console.log(err);
    }
    );
}

export const updateCrypto = async(req, res, next) => {
    crypto.updateOne(req.body).then((result) => {
        req.result = result;
        next();
    }
    ).catch((err) => {
        console.log(err);
    }
    );
  }