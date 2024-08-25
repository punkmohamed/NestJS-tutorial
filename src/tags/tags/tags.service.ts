import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
    tags = [
        {
            title: "tag1",
            id: "1"
        },
        {
            title: "tag2",
            id: "2"
        },
        {
            title: "tag3",
            id: "3"
        },
    ]
    getAllTags() {
        return this.tags
    }
    getaTags(id) {
        const tag = this.tags.find((tags) => tags.id === id)
        return { message: "founded tag", tag }
    }
    addTags(body) {
        this.tags.push(body)
        return { message: "added", tags: this.tags }
    }
    updateTags({ id, body }) {
        let tag = this.tags.find((tags) => tags.id === id)
        tag = { ...tag, ...body }
        return { message: "founded tag", tag }
    }
    deleteTags(id: string) {
        this.tags = this.tags.filter((tag) => tag.id !== id)
        return { message: "deleted", tags: this.tags }
    }

}
