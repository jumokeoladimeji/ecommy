import { createCategory, listCategories, getOneCategory,  updateCategory, destroyCategory } from '../services/category';

const CategoryHandler = {
    create: async(req, res) => {
        try {
            const createdCategory = await createCategory(req.body);
            if (createdCategory.error) {
                return res.json({ status: 500, error: createdCategory.error });
            }
            return res.status(201).json({ status: 201, message: 'Category Created Successfully', data: createdCategory });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    getAll: async(req, res) => {
      try {
          const categories = await listCategories();
          if (!categories) {
              return res.json({ status: 500, error: "Error retrieving categories data" });
          }
          return res.status(200).json({ status: 200, message: 'categories Returned Successfully', data: categories });
        } catch (error) {
          return res.status(500).json({
            error: 'Internal server error'
          });
      }
    },
    getOne: async(req, res) => {
        try {
            const category = await getOneCategory(req.params.categoryId);
            if (category.error) {
                return res.json({ status: category.status || 500, error: category.error });
            }
            return res.status(200).json({ status: 200, message: 'Category Returned Successfully', data: category });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    update: async(req, res) => {
        try {
            const updatedCategory = await updateCategory(req.body, req.params.categoryId);
            if (updatedCategory.error) {
              return res.json({ status: updatedCategory.status || 500, error: updatedCategory.error });
            }
            return res.status(200).json({ status: 200, message: 'Category Updated Successfully', data: updatedCategory });
          } catch (error) {
            console.log('err', error)
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    },
    delete: async(req, res) => {
        try {
            const categoryToDelete = await destroyCategory(req.params.categoryId);
            if (categoryToDelete.error) {
                return res.json({ status: 500, error: categoryToDelete.error });
            }
            return res.status(200).json({ status: 200, message: 'Category Deleted Successfully' });
          } catch (error) {
            return res.status(500).json({
              error: 'Internal server error'
            });
        }
    }
}

export default CategoryHandler;