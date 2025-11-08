import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Printer, Download, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const [handwritingSample, setHandwritingSample] = useState<File | null>(null);
  const [homeworkText, setHomeworkText] = useState("");
  const [homeworkPdf, setHomeworkPdf] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setHandwritingSample(file);
      toast({
        title: "Handwriting sample uploaded!",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setHandwritingSample(file);
      toast({
        title: "Handwriting sample uploaded!",
        description: `${file.name} has been uploaded successfully.`,
      });
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
    }
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setHomeworkPdf(file);
      toast({
        title: "PDF uploaded!",
        description: `${file.name} has been uploaded successfully.`,
      });
    }
  };

  const handleExport = () => {
    if (!handwritingSample || (!homeworkText && !homeworkPdf)) {
      toast({
        title: "Missing information",
        description: "Please upload a handwriting sample and enter homework text or PDF.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Generating 3D print file...",
      description: "Your homework is being converted to 3D printer format.",
    });
  };

  return (
    <div className="min-h-screen bg-[image:var(--gradient-bg)] relative">
      {/* Purple Glow Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[hsl(var(--purple-accent))] opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[hsl(var(--purple-deep))] opacity-15 blur-[100px] rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[hsl(var(--purple-accent))] opacity-10 blur-[90px] rounded-full"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-secondary-foreground">AI-Powered Handwriting</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-[hsl(var(--purple-deep))] to-[hsl(var(--purple-accent))] bg-clip-text text-transparent">
                  Print Your Homework in Your Handwriting
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Upload your handwriting sample and let our 3D printer create homework that looks exactly like you wrote it by hand.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--purple-deep))] to-[hsl(var(--purple-accent))] opacity-25 blur-3xl rounded-full"></div>
              <img
                src={heroImage} 
                alt="3D Printer printing handwritten text" 
                className="relative rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">How It Works</h2>
            <p className="text-muted-foreground text-lg">Three simple steps to print your homework</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-105 group border-purple-500/20 animate-fade-in [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-[var(--transition-smooth)] group-hover:rotate-12 group-hover:scale-110">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">1. Upload Sample</h3>
              <p className="text-muted-foreground">Upload a clear image of your handwriting on paper</p>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-105 group border-pink-500/20 animate-fade-in [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/50 group-hover:shadow-pink-500/70 transition-[var(--transition-smooth)] group-hover:rotate-12 group-hover:scale-110">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">2. Type Content</h3>
              <p className="text-muted-foreground">Enter the homework text you want to be written</p>
            </Card>

            <Card className="p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] hover:scale-105 group border-indigo-500/20 animate-fade-in [animation-delay:500ms] opacity-0 [animation-fill-mode:forwards]">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/50 group-hover:shadow-indigo-500/70 transition-[var(--transition-smooth)] group-hover:rotate-12 group-hover:scale-110">
                <Printer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent">3. Print</h3>
              <p className="text-muted-foreground">Export to 3D printer and watch it write in your style</p>
            </Card>
          </div>

          {/* Upload & Input Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Handwriting Upload */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Upload Handwriting Sample</h3>
              
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary transition-[var(--transition-smooth)] cursor-pointer bg-card/50"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2">
                      {handwritingSample ? handwritingSample.name : "Drop your handwriting image here"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      or click to browse (JPG, PNG, PDF)
                    </p>
                  </div>
                </label>
              </div>

              {handwritingSample && (
                <div className="mt-6 p-4 bg-secondary/50 rounded-lg flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{handwritingSample.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(handwritingSample.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Homework Text Input */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Enter Homework Text</h3>
              
              <Textarea
                placeholder="Type or paste your homework content here..."
                value={homeworkText}
                onChange={(e) => setHomeworkText(e.target.value)}
                className="min-h-[200px] text-base resize-none"
                disabled={!!homeworkPdf}
              />

              <div className="mt-4 flex items-center gap-4">
                <div className="flex-1 border-t border-border"></div>
                <span className="text-sm text-muted-foreground">OR</span>
                <div className="flex-1 border-t border-border"></div>
              </div>

              <div className="mt-4">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handlePdfUpload}
                  className="hidden"
                  id="pdf-upload"
                />
                <label htmlFor="pdf-upload">
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <span className="cursor-pointer">
                      <Upload className="w-4 h-4" />
                      {homeworkPdf ? "Change PDF" : "Upload PDF"}
                    </span>
                  </Button>
                </label>
              </div>

              {homeworkPdf && (
                <div className="mt-4 p-4 bg-secondary/50 rounded-lg flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{homeworkPdf.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(homeworkPdf.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  {homeworkPdf ? "PDF uploaded" : `${homeworkText.length} characters`}
                </p>
                <Button onClick={handleExport} variant="hero" className="gap-2">
                  <Download className="w-4 h-4" />
                  Export for 3D Printer
                </Button>
              </div>
            </Card>
          </div>

          {/* Preview Section */}
          {(homeworkText || homeworkPdf) && handwritingSample && (
            <Card className="mt-8 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                Preview
              </h3>
              <div className="bg-card rounded-lg border-2 border-border p-8 min-h-[200px]">
                {homeworkPdf ? (
                  <div className="flex items-center justify-center gap-3">
                    <FileText className="w-8 h-8 text-primary" />
                    <div>
                      <p className="font-medium">{homeworkPdf.name}</p>
                      <p className="text-sm text-muted-foreground">Ready for 3D printing</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-foreground whitespace-pre-wrap font-mono">
                    {homeworkText}
                  </p>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                This is how your {homeworkPdf ? "PDF" : "text"} will be converted to match your handwriting style
              </p>
            </Card>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
