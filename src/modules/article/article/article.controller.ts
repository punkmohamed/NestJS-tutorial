import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ArticleService } from './article.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('article')
export class ArticleController {

    constructor(private readonly _articleService: ArticleService) {

    }
    @Get()
    getAllArticle() {
        return this._articleService.getArticales()
    }

    @Post()
    // @UseInterceptors(FileInterceptor('file')) , @UploadedFile() file: Express.Multer.File
    @UseInterceptors(FilesInterceptor('files', 10))
    addArticle(@Body() body: any, @UploadedFiles() files: Array<Express.Multer.File>) {
        return this._articleService.addArticle(body, files)
    }

}

