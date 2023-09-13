export default {
    name: 'dish',
    type: 'document',
    title: 'Dishes',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Dish name',
        validation: rule =>rule.required() 
      },
      {
        name: 'description',
        type: 'string',
        title: 'Dish description',
        validation: rule =>rule.required() 
      },
      {
        name: 'image',
        type: 'image',
        title: 'image of the category',
        validation: rule =>rule.required() 
      },
      {
        name: 'Price',
        type: 'number',
        title: 'Price of the dish in USD',
      }
    ]
  }