import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertToPdf() {
    try {
        // Launch browser
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // Set page size for PDF
        await page.setViewport({ width: 1200, height: 1600 });
        
        // Load the HTML file
        const htmlPath = path.join(__dirname, 'swar_cv.html');
        const fileUrl = `file://${htmlPath}`;
        
        await page.goto(fileUrl, { 
            waitUntil: 'networkidle0',
            timeout: 10000 
        });
        
        // Generate PDF
        await page.pdf({
            path: 'Swar_Shinde_CV.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20px',
                bottom: '20px',
                left: '20px',
                right: '20px'
            }
        });
        
        console.log('✅ PDF generated successfully: Swar_Shinde_CV.pdf');
        
        await browser.close();
    } catch (error) {
        console.error('❌ Error generating PDF:', error.message);
        process.exit(1);
    }
}

convertToPdf();
