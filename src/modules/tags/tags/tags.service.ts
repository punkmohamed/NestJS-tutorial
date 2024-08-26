import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from 'src/core/schema/tags.chema';
import { User } from 'src/core/schema/user.schema';

@Injectable()
export class TagsService {
    constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>,
        @InjectModel(User.name) private userModel: Model<User>) {

    }
    async getAllTags() {
        let tags = await this.tagModel.find()
        return { message: "founded tag", tags }
    }
    async getaTag(id: string) {
        const tag = await this.tagModel.findById(id).populate('createdBy', 'name email');
        return { message: "Found tag", tag };
    }

    async addTag(body: any) {
        const { title, userId } = body
        const user = await this.userModel.findById(userId)
        if (!user) {
            throw new HttpException("user not dound", HttpStatus.NOT_FOUND)
        }
        const newTag = await this.tagModel.insertMany({ title, createdBy: user._id })
        return { message: "Added tag", tag: newTag };
    }

    async updateTag(id: string, body: Tag) {
        const tag = await this.tagModel.findByIdAndUpdate(id, body, { new: true })
        return { message: "Updated tag", tag };
    }

    async deleteTag(id: string) {
        const deletedTag = await this.tagModel.findByIdAndDelete(id)
        return { message: "Deleted tag", deletedTag };
    }
}
