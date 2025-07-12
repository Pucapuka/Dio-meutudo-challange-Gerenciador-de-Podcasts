import { Podcast } from '../interfaces/podcast-interface';
import podcastsData from '../data/podcasts.json';

const podcasts: Podcast[] = podcastsData;

export class PodcastService {
    getAllPodcasts(): Podcast[] {
        return podcasts;
    }

    getPodcastById(id: string): Podcast | undefined {
        return podcasts.find(podcast => podcast.videoId === id);
    }

    createPodcast(podcastData: Podcast): Podcast {
        podcasts.push(podcastData);
        return podcastData;
    }

    updatePodcast(id: string, podcastData: Partial<Podcast>): Podcast | null {
        const index = podcasts.findIndex(podcast => podcast.videoId === id);
        if (index === -1) return null;
        
        podcasts[index] = { ...podcasts[index], ...podcastData };
        return podcasts[index];
    }

    deletePodcast(id: string): boolean {
        const index = podcasts.findIndex(podcast => podcast.videoId === id);
        if (index === -1) return false;
        
        podcasts.splice(index, 1);
        return true;
    }

    getPodcastsByCategory(category: string): Podcast[] {
        return podcasts.filter(podcast => 
            podcast.categories.some(cat => 
                cat.toLowerCase() === category.toLowerCase()
            )
        );
    }

    getAvailableCategories(): string[] {
        const allCategories = podcasts.flatMap(podcast => podcast.categories);
        return [...new Set(allCategories)];
    }
}