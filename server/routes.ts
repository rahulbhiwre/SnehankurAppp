
import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Simple contact form API endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    
    // Log the form submission (for demonstration)
    console.log('Contact form submission:', { name, email, phone, message });
    
    // In a real app, you'd send an email or save to a database
    // For now, just return success
    return res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
