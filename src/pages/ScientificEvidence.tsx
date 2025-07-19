
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ExternalLink } from 'lucide-react';

const ScientificEvidence = () => {
  const { t } = useLanguage();

  const pdfs = [
    {
      id: 1,
      title: '24228_0',
      filename: '24228_0.pdf'
    },
    {
      id: 2,
      title: 'OCE-PSYCHOMETRIC PROPERTIES OF THE MAP OF CHARACTERS',
      filename: 'OCE-PSYCHOMETRICPROPERTIESOFTHEMAPOFCHARACTERS.pdf'
    },
    {
      id: 3,
      title: 'OCE - RELATION BETWEEN CHARACTER STRACES AND THE FUNCTION OF OVERWEIGHT',
      filename: 'OCE-RELATIONBETWEENCHARACTERSTRACESANDTHEFUNCTIONOFOVERWEIGHT.pdf'
    },
    {
      id: 4,
      title: 'OCE - THE RELATION BETWEEN ORAL MASOCHIST AND RIGID CHARACTERS WITH OVERWEIGHT',
      filename: 'OCE-THERELATIONBETWEENORALMASOCHISTANDRIGIDCHARACTERSWITHOVEREIGHT.pdf'
    }
  ];

  return (
    <div className="font-montserrat animate-fade-in">
      {/* Hero Section */}
      <section className="bg-neutral-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6 animate-fade-in">
            Scientific Evidence
          </h1>
          <p className="text-xl text-neutral-taupe max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Access our research documents and scientific publications
          </p>
        </div>
      </section>

      {/* PDF Downloads Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {pdfs.map((pdf, index) => (
              <Card 
                key={pdf.id} 
                className="hover:shadow-lg transition-all duration-300 border-2 border-neutral-taupe/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <a 
                    href={`/${pdf.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-primary hover:text-secondary transition-colors duration-200 group"
                  >
                    <div className="flex-shrink-0">
                      <FileText className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-200" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 group-hover:underline">
                        {pdf.title}
                      </h3>
                      <p className="text-sm text-neutral-taupe">
                        File: /{pdf.filename}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ExternalLink className="h-5 w-5 text-neutral-taupe group-hover:text-secondary transition-colors duration-200" />
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScientificEvidence;
