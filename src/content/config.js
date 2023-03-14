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

export const collections = {
  
	"fundamentals": fundamentalsCollection,
	"health": healthCollection,
	"wealth": wealthCollection,

}
