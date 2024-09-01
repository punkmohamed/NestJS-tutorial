import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import mongoose from "mongoose";
import { Tag } from "./tags.chema";


@Schema({ timestamps: true, versionKey: false })
export class Article {
    @Prop()
    title: string;
    @Prop()
    slug: string;
    @Prop()
    description: string;
    @Prop()
    content: string;
    @Prop()
    coverImage: string;
    @Prop()
    images: string[];
    @Prop()
    likes: number
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] })
    tagList: Tag[]
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    auther: User

}

export const ArticleSchema = SchemaFactory.createForClass(Article)