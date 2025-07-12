import { IncomingMessage, ServerResponse } from 'http';
import { URL } from 'url';
import { PodcastService } from '../services/podcast-service';
import { sendResponse, parseRequestBody } from '../utils/http-utils';
import { Podcast } from '../interfaces/podcast-interface';

const podcastService = new PodcastService();

export class PodcastController {
    async getAllPodcasts(req: IncomingMessage, res: ServerResponse) {
        const podcasts = podcastService.getAllPodcasts();
        sendResponse(res, 200, podcasts);
    }

    async getPodcastById(req: IncomingMessage, res: ServerResponse) {
        const url = new URL(req.url || '', `http://${req.headers.host}`);
        const id = url.pathname.split('/')[2];
        
        const podcast = podcastService.getPodcastById(id);
        if (podcast) {
            sendResponse(res, 200, podcast);
        } else {
            sendResponse(res, 404, { message: 'Podcast not found' });
        }
    }

    async createPodcast(req: IncomingMessage, res: ServerResponse) {
        try {
            const body = await parseRequestBody(req) as Podcast;
            const newPodcast = podcastService.createPodcast(body);
            sendResponse(res, 201, newPodcast);
        } catch (error) {
            sendResponse(res, 400, { message: 'Invalid request body' });
        }
    }

    async updatePodcast(req: IncomingMessage, res: ServerResponse) {
        const url = new URL(req.url || '', `http://${req.headers.host}`);
        const id = url.pathname.split('/')[2];
        
        try {
            const body = await parseRequestBody(req) as Partial<Podcast>;
            const updatedPodcast = podcastService.updatePodcast(id, body);
            
            if (updatedPodcast) {
                sendResponse(res, 200, updatedPodcast);
            } else {
                sendResponse(res, 404, { message: 'Podcast not found' });
            }
        } catch (error) {
            sendResponse(res, 400, { message: 'Invalid request body' });
        }
    }

    async deletePodcast(req: IncomingMessage, res: ServerResponse) {
        const url = new URL(req.url || '', `http://${req.headers.host}`);
        const id = url.pathname.split('/')[2];
        
        const success = podcastService.deletePodcast(id);
        if (success) {
            sendResponse(res, 200, { message: 'Podcast deleted successfully' });
        } else {
            sendResponse(res, 404, { message: 'Podcast not found' });
        }
    }

    async getPodcastsByCategory(req: IncomingMessage, res: ServerResponse) {
        try {
            const url = new URL(req.url || '', `http://${req.headers.host}`);
            const category = decodeURIComponent(url.pathname.split('/')[3]);
            
            if (!category) {
                sendResponse(res, 400, { message: 'Category parameter is required' });
                return;
            }

            const filteredPodcasts = podcastService.getPodcastsByCategory(category);
            
            if (filteredPodcasts.length > 0) {
                sendResponse(res, 200, filteredPodcasts);
            } else {
                sendResponse(res, 404, { 
                    message: 'No podcasts found for this category',
                    availableCategories: podcastService.getAvailableCategories()
                });
            }
        } catch (error) {
            sendResponse(res, 500, { message: 'Internal server error' });
        }
    }

    async listAllCategories(req: IncomingMessage, res: ServerResponse) {
        const categories = podcastService.getAvailableCategories();
        sendResponse(res, 200, categories);
    }
}