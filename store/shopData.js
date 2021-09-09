export const state = () => ({
  json: `[
    {
      "id": 1,
      "title": "Books",
      "subcategories": [
        {
          "id": 1,
          "title": "Classic",
          "goods": [
            {
              "id": 1,
              "price": 300,
              "title": "Война и мир",
              "description": "Description of Война и мир"
            },
            {
              "id": 2,
              "price": 250,
              "title": "Обломов",
              "description": "Description of Обломов"
            }
          ]
        },
        {
          "id": 2,
          "title": "Adventure",
          "goods": [
            {
              "id": 3,
              "price": 270,
              "title": "Harry Potter",
              "description": "Description of Harry Potter"
            },
            {
              "id": 4,
              "price": 260,
              "title": "The Lord of the Rings",
              "description": "Description of The Lord of the Rings"
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "title": "Phones",
      "subcategories": [
        {
          "id": 3,
          "title": "IPhone",
          "goods": [
            {
              "id": 5,
              "price": 900,
              "title": "IPhone X",
              "description": "Description of iPhone X"
            },
            {
              "id": 6,
              "price": 1000,
              "title": "IPhone XR",
              "description": "Description of iPhone XR"
            }
          ]
        },
        {
          "id": 4,
          "title": "Android",
          "goods": [
            {
              "id": 7,
              "price": 350,
              "title": "Xiaomi Mi 10 Lite",
              "description": "Description of Xiaomi Mi Lite 10"
            },
            {
              "id": 8,
              "price": 450,
              "title": "Xiaomi Mi 10",
              "description": "Description of Xiaomi Mi 10"
            }
          ]
        }
      ]
    }
  ]`
})

export const getters ={
  getData: state => JSON.parse(state.json)
}