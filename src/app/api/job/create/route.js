
import connectMongoDB from "@/db/dbConnect";
import Job from "@/models/job"; "@/models/job";

connectMongoDB()

export async function POST (req, res)  {
  
    try {
      const { title, location, phoneNumber, description } = req.body;

   // Create a new job instance using the Job model
      const newJob = new Job({
        title,
        location,
        phoneNumber,
        description,
      });

      await newJob.save();

      res.status(201).json({ message: 'Job created successfully', job: newJob });
    } catch (error) {
      console.error('Error creating job:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } 