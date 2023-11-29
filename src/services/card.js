import db from '../models/index.js';

const { Cards } = db;
  
export const createCard = async (cardDetails) => {
    cardToCreate.category_id = categoryId
    const newCard = await Cards.create(cardToCreate);
    return newCard.toJSON();
};


/**
 * @description - Fetches all Cards
*/
export const listCard = async () => {
    const cards = await Cards.findAll();
    return cards;
};


/**
  * @description - Fetches a Card
*/
export const getOneCard = async (cardId) => {
    const card = await Cards.findOne({ where: { id: cardId }});
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
    const card = await Cards.findOne({ where: { id: cardId }})
    if (!card) {
        return { 
            success: false, 
            status: 404, 
            error: 'Card not found'
        };
    }

    card.title = cardDetails.title || card.title;
    card.price = cardDetails.price || card.price;
    card.img_url = cardDetails.img_url || card.img_url;
    card.front_img_url = cardDetails.front_img_url || card.front_img_url;
    card.side_img_url = cardDetails.side_img_url || card.side_img_url;
    card.back_img_url = cardDetails.back_img_url || card.back_img_url;
    card.description = cardDetails.description || card.description;
    card.available_quantity = cardDetails.available_quantity || card.available_quantity;
    await card.save();
    return card;
};

/**
 * @description - Deletes a Card
*/
export const destroyCard = async (cardId) => {
    const card = await Cards.findOne({ where: { id: cardId }});
    if (!card) {
        return {
            error: 'cards not found',
            status: 404
        }
    }
    await Cards.destroy({ where: { id: cardId }})
    return { 
        success: true, 
        status: 200,
        message: 'card deleted'
    }
                
}
