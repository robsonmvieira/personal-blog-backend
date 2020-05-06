import SaveCategoryService from '@infra/services/SaveCategoryService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import FindAllCategoryService from '@infra/services/FindAllCategoryService'
import ShowCategoryService from '@infra/services/ShowCategoryService'
import UpdateCategoryService from '@infra/services/UpdateCategoryService'
import RemoveCategoryService from '@infra/services/RemoveCategoryService'
// const routes = Router()

export default class CategoryController {
  public async index (request: Request, response: Response): Promise<Response> {
    const categoryService = container.resolve(FindAllCategoryService)
    const result = await categoryService.exec()
    return response.status(200).json(result)
  }

  public async save (request: Request, response: Response): Promise<Response> {
    const categoryService = container.resolve(SaveCategoryService)
    const result = await categoryService.exec(request.body)
    return response.status(200).json(result)
  }

  public async show (request: Request, response: Response): Promise<Response> {
    const categoryService = container.resolve(ShowCategoryService)
    const result = await categoryService.exec(request.params.id)
    if (result !== undefined) {
      return response.status(200).json(result)
    }
    return response.status(400).json({ error: 'category was not found' })
  }

  public async update (request: Request, response: Response): Promise<Response> {
    const categoryService = container.resolve(UpdateCategoryService)
    const result = await categoryService.exec(request.params.id, request.body)

    if (result !== undefined) {
      return response.status(200).json(result)
    }
    return response.status(401).json({ error: 'bad request' })
  }

  public async remove (request: Request, response: Response): Promise<Response> {
    const categoryService = container.resolve(RemoveCategoryService)
    const result = await categoryService.exec(request.params.id)
    if (result !== undefined) {
      return response.status(200).json(true)
    }
    return response.status(400).json(false)
  }
}
