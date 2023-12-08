import db from '../models/index.js';

const { Categories, Cards } = db;
  
export const createCategory = async (categoryDetails) => {
    console.log(categoryDetails, 'categoryDetails')
    try { 
        const newCategory = await Categories.create(categoryDetails);
        return newCategory.toJSON();
    } catch(error) {
        console.log('error', error);
    }
};


/**
 * @description - Fetches all Categories
*/
export const listCategories = async () => {
    try {
        const categories = await Categories.findAll({
            include: [{
                model: Cards,
                as: 'cards',
            }],
            order: [["name", "ASC"]],
            // raw: true,
        });
        return categories
      } catch (error) {
        // console.error(new Date().toUTCString(), "-", error);
        // return "internal error"
      }
    }

/**
  * @description - Fetches a Category
*/
export const getOneCategory = async (categoryId) => {
    try {
        const category = await Categories.findOne({ where: { id: categoryId }}, 
            {
                include: [{
                    model: Cards,
                    as: 'cards',
                }]
        });
        if (!category) {
            return {
                error: 'Category not found',
                status: 404
            }
        }
        return category || category.toJSON();
    } catch(error) {
        console.log('error', error);
    }
};

/**
* @description - Updates Category details
*/
export const updateCategory = async (categoryDetails, categoryId) => {
    try {
        const category = await Categories.findOne({ where: { id: categoryId }}, 
            {
                include: [{
                    model: Cards,
                    as: 'cards',
                }]
        })
        if (!category) {
            return { 
                success: false, 
                status: 404, 
                error: 'Category not found'
            };
        }

        category.name = categoryDetails.name || category.name,
        await category.save();
        return category;
    } catch(error) {
        console.log('error', error);
    }
};

/**
 * @description - Deletes a Category
*/
export const destroyCategory = async (categoriesId) => {
    try {
        const categories = await Categories.findOne({ where: { id: categoriesId }},
            {
                include: [{
                    model: Cards,
                    as: 'cards',
                }]
        });
        if (!categories) {
            return {
                error: 'categories not found',
                status: 404
            }
        }
        await Categories.destroy({ where: { id: categoriesId }})
        return { 
            success: true, 
            status: 200,
            message: 'categories deleted'
        }  
    } catch(error) {
        console.log('error', error);
    }            
}
