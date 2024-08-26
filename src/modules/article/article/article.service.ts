import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schema/articale.schema';
import { Tag } from 'src/core/schema/tags.chema';
import { User } from 'src/core/schema/user.schema';

@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private articleModel: Model<Article>, @InjectModel(Tag.name) private tagModel: Model<Tag>,
        @InjectModel(User.name) private userModel: Model<User>) {

    }
    async getArticales() {
        let articles = await this.articleModel.find()
        return { message: "founded articles", articles }
    }


    async addArticle(body: any, files: Array<Express.Multer.File>) {
        console.log('Files try again:', files);
        const { auther, ...rest } = body
        const user = await this.userModel.findById(auther)
        // if (!user) {
        //     throw new HttpException("invalid errorsss", HttpStatus.NOT_FOUND)
        // }


        const fileNames = files.map((file) => file.originalname);
        const newArticle = await this.articleModel.insertMany({ ...rest, auther: user, images: fileNames })
        return { message: "Added tag", article: newArticle };
    }
}

