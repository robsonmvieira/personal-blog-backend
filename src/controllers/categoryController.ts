import { Request, Response } from 'express'
import { injectable, inject } from 'tsyringe'
import ICategoryRepository from '@domain/contracts/ICategoryRepository'
// const routes = Router()

@injectable()
export default class CategoryController {
  constructor (
    @inject('CategoryRepository') private readonly categoryRepository: ICategoryRepository
  ) {}

  public async index (request: Request, response: Response): Promise<Response> {
    const res = await this.categoryRepository.index()

    return response.status(200).json(res)
  }
}

// routes.post('/', async (req, res) => {
//   const categoryRepository = getCustomRepository(CategoryRepository)
//   const result = await categoryRepository.save(req.body)
//   res.status(200).json(result)
// })

// routes.get('/', async (req, res) => {
//   try {
//     const categoryRepository = getCustomRepository(CategoryRepository)
//     const categories = await categoryRepository.find()
//     return res.status(200).json(categories)
//   } catch (error) {
//     console.log(error)
//   }
// })

// routes.get('/:id', async (req, res) => {
//   try {
//     const { id } = req.params
//     const categoryRepository = getCustomRepository(CategoryRepository)
//     const category = await categoryRepository.findOne({ id })
//     res.status(200).json(category)
//   } catch (error) {
//     console.log(error)
//   }
// })
// routes.put('/:id', async (req, res) => {
//   const { id } = req.params
//   const categoryRepository = getCustomRepository(CategoryRepository)
//   const result = await categoryRepository.update(id, req.body)
//   res.status(200).json(result)
// })

// routes.delete('/:id', async (req, res) => {
//   const { id } = req.params
//   const categoryRepository = getCustomRepository(CategoryRepository)
//   const category = await categoryRepository.findOne({ id })

//   if (category != null) {
//     const result = await categoryRepository.remove(category)
//     return res.status(200).json(result)
//   }
//   return res.status(400).json({ error: 'category was not found' })
// }
// )
// // export default routes
