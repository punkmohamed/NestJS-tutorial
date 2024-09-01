import { Body, Controller, Get, Post, Req, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ArticleService } from './article.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { GuardGuard } from 'src/core/guard/guard.guard';

@Controller('article')
@UseGuards(GuardGuard)
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
    addArticle(@Body() body: any, @UploadedFiles() files: Array<Express.Multer.File>, @Req() req: any) {
        const id = req['userId']

        return this._articleService.addArticle(body, files, req['userId'])
    }

}

