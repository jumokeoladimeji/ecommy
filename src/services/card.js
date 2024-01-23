import db from '../models/index.js';

const { Cards, Categories } = db;
  
export const createCard = async (cardDetails) => {
    const newCard = await Cards.create(cardDetails);
    return newCard.toJSON();
};


/**
 * @description - Fetches all Cards
*/
export const listCard = async () => {
    const cards = await Cards.findAll({
        include: {
            model: Categories,
            as: 'category'
        }
    });
    return cards;
};


/**
  * @description - Fetches a Card
*/
export const getOneCard = async (cardId) => {
    const card = await Cards.findOne(
        {
            where: { id: cardId },
            include: {
                model: Categories,
                as: 'category'
            }
        }
    );
    if (!card) {
        return {
            error: 'Card not found',
            status: 404
        }
    }
    return card || card.toJSON();
};

/**
* @description - Updates Card details
*/
export const updateCard = async (cardDetails, cardId) => {
    const card = await Cards.findOne({
            where: { id: cardId },
            include: [{
                model: Categories,
                as: 'category'
            }]
        }
    )
    if (!card) {
        return { 
            success: false, 
            status: 404, 
            error: 'Card not found'
        };
    }

    const cardToEdiT = card.toJSON()

    cardToEdiT.title = cardDetails.title || cardToEdiT.title;
    cardToEdiT.price = cardDetails.price || cardToEdiT.price;
    cardToEdiT.img_url = cardDetails.img_url || cardToEdiT.img_url;
    cardToEdiT.front_img_url = cardDetails.front_img_url || cardToEdiT.front_img_url;
    cardToEdiT.side_img_url = cardDetails.side_img_url || cardToEdiT.side_img_url;
    cardToEdiT.back_img_url = cardDetails.back_img_url || cardToEdiT.back_img_url;
    cardToEdiT.description = cardDetails.description || cardToEdiT.description;
    cardToEdiT.available_quantity = cardDetails.available_quantity || cardToEdiT.available_quantity;

    const result = await Cards.update(
        { cardToEdiT },
        { where: { id:  cardId } }
    )
    return cardToEdiT;
};

/**
 * @description - Deletes a Card
*/
export const destroyCard = async (cardId) => {
    console.log('get card')
    const card = await Cards.findOne({ where: { id: cardId }});
    if (!card) {
        return {
            error: 'card not found',
            status: 404
        }
    }
    console.log('card', card)
    await Cards.destroy({ where: { id: cardId }})
    return { 
        success: true, 
        status: 200,
        message: 'card deleted'
    }
                
}
