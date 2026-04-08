import { ArticleModel } from '../schemas/NewsModel'
import type { IArticleDTO } from '../DTO/ArticleDTO'

type RawId = string | { toString(): string }

export function mapArticleDocToDTO(doc: any): IArticleDTO {
  const rawId: RawId | undefined = doc?._id
  const id = typeof rawId === 'string' ? rawId : rawId?.toString?.() ?? ''
  const createdDate = typeof doc?.createdDate === 'number' ? doc.createdDate : Date.now()
  const createdAtDate = new Date(createdDate)

  return {
    ...doc,
    _id: id,
    createdDate,
    createdDay: doc?.createdDay ?? createdAtDate.getDate(),
    createdMonth: doc?.createdMonth ?? createdAtDate.getMonth() + 1,
    createdYear: doc?.createdYear ?? createdAtDate.getFullYear(),
  }
}

export function mapArticleDocsToDTO(docs: any[]): IArticleDTO[] {
  return docs.map(mapArticleDocToDTO)
}

type Filters = {
  title?: string
  createdDate?: Record<string, string>
}

export function buildNewsMongoFilter(filters?: Filters) {
  if (!filters) return {}

  const query: Record<string, unknown> = {}

  if (filters.title) {
    query.title = { $regex: filters.title, $options: 'i' }
  }

  if (filters.createdDate) {
    query.createdDate = {} as Record<string, string>
    for (const [op, val] of Object.entries(filters.createdDate)) {
      ;(query.createdDate as Record<string, string>)[op] = val
    }
  }

  return query
}

export async function ensureArticleExists(articleId: string) {
  const doc = await ArticleModel.findById(articleId).lean().exec()
  if (!doc) {
    throw new Error('News not found')
  }
  return doc
}
