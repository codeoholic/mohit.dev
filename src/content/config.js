import { z, defineCollection } from "astro:content";
const fundamentalsCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		update_date: z.string(),
		url: z.string(),
	})

})
const healthCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		update_date: z.string(),
		url: z.string(),
	})

})
const wealthCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		update_date: z.string(),
		url: z.string(),
		image: z.string(),

	})

})
const thoughtsCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		update_date: z.string(),
		url: z.string(),

	})

})
const astroCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		update_date: z.string(),
		url: z.string(),

	})

})
const mysqlCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		description: z.string(),
		publish_date: z.string(),
		update_date: z.string(),
		url: z.string(),

	})

})
const blogsCollection = defineCollection({

	schema: z.object({

		description: z.string(),
		publish_date: z.string(),
		tags: z.string(),
		title: z.string(),
		update_date: z.string(),
		url: z.string(),

	})

})
const coursesCollection = defineCollection({

	schema: z.object({

		logo: z.string(),
		name: z.string(),
		order: z.number(),
		url: z.string(),

	})

})

export const collections = {

	"astro": astroCollection,
	"fundamentals": fundamentalsCollection,
	"health": healthCollection,
	"mysql": mysqlCollection,
	"thoughts": thoughtsCollection,
	"wealth": wealthCollection,
	"blogs": blogsCollection,
	"courses": coursesCollection,

}
