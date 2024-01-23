import db from '../models/index.js';

const { Categories, Cards } = db;
  
export const createCategory = async (categoryDetails) => {
    const newCategory = await Categories.create(categoryDetails);
    return newCategory.toJSON();
};


/**
 * @description - Fetches all Categories
*/
export const listCategories = async () => {
    const categories = await Categories.findAll({
        include: [{
            model: Cards,
            as: 'cards',
        }],
        order: [["name", "ASC"]],
    });
    return categories
}

/**
  * @description - Fetches a Category
*/
export const getOneCategory = async (categoryId) => {
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
};

/**
* @description - Updates Category details
*/
export const updateCategory = async (categoryDetails, categoryId) => {
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

    await Categories.update(
        { category },
        { where: { id:  categoryId } }
    )
    return category;
};

/**
 * @description - Deletes a Category
*/
export const destroyCategory = async (categoriesId) => {
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
}
