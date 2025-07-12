import { IncomingMessage, ServerResponse } from 'http';
import { PodcastController } from '../controllers/podcast-controller';

const podcastController = new PodcastController();

export const handlePodcastRoutes = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url || '';
    
    // GET /podcasts
    if (url === '/podcasts' && req.method === 'GET') {
        podcastController.getAllPodcasts(req, res);
    } 
    // GET /podcasts/categories
    else if (url === '/podcasts/categories' && req.method === 'GET') {
        podcastController.listAllCategories(req, res);
    }
    // GET /podcasts/category/:category
    else if (url.match(/\/podcasts\/category\/([^\/]+)/) && req.method === 'GET') {
        podcastController.getPodcastsByCategory(req, res);
    }
    // GET /podcasts/:id
    else if (url.match(/\/podcasts\/([^\/]+)/) && req.method === 'GET') {
        podcastController.getPodcastById(req, res);
    }
    // POST /podcasts
    else if (url === '/podcasts' && req.method === 'POST') {
        podcastController.createPodcast(req, res);
    }
    // PUT /podcasts/:id
    else if (url.match(/\/podcasts\/([^\/]+)/) && req.method === 'PUT') {
        podcastController.updatePodcast(req, res);
    }
    // DELETE /podcasts/:id
    else if (url.match(/\/podcasts\/([^\/]+)/) && req.method === 'DELETE') {
        podcastController.deletePodcast(req, res);
    }
    // Not found
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
};