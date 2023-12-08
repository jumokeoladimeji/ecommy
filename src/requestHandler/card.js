import { createCard, listCard, getOneCard,  updateCard, destroyCard } from '../services/card';

const cardHandler = {
    create: async(req, res) => {
        try {
            const createdCard = await createCard(req.body);
            if (createdCard.error) {
                return res.json({ status: 500, error: createdCard.error });
            }
            return res.status(201).json({ status: 201, message: 'Card Created Successfully', data: createdCard });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    getAll: async(req, res) => {
      try {
          const cards = await listCard();
          if (cards.error) {
              return res.json({ status: 500, error: cards.error });
          }
          return res.status(200).json({ status: 200, message: 'Card Returned Successfully', data: cards });
        } catch (error) {
          return res.status(500).json({
            error: 'Internal server error'
          });
      }
    },
    getOne: async(req, res) => {
        try {
            const card = await getOneCard(req.params.cardId);
            if (card.error) {
                return res.json({ status: card.status || 500, error: card.error });
            }
            return res.status(200).json({ status: 200, message: 'Card Returned Successfully', data: card });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    update: async(req, res) => {
        try {
            const updatedCard = await updateCard(req.body, req.params.cardId);
            if (updatedCard.error) {
              return res.json({ status: updatedCard.status || 500, error: updatedCard.error });
            }
            return res.status(200).json({ status: 200, message: 'Card Updated Successfully', data: updatedCard });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    delete: async(req, res) => {
        try {
            const createdCard = await destroyCard(req.params.CardId);
            if (createdCard.error) {
                return res.json({ status: 500, error: createdCard.error });
            }
            return res.status(200).json({ status: 200, message: 'Card Deleted Successfully', data: createdCard });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    }
}

export default cardHandler;