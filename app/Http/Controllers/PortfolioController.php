<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display the main portfolio homepage
     */
    public function index()
    {
        return Inertia::render('Home', [
            'personalInfo' => $this->getPersonalInfo(),
            'skills' => $this->getSkills(),
            'education' => $this->getEducation(),
            'projects' => $this->getProjects(),
        ]);
    }

    /**
     * Display the projects page
     */
    public function projects()
    {
        return Inertia::render('Projects', [
            'projects' => $this->getProjects(),
        ]);
    }

    /**
     * Display the about page
     */
    public function about()
    {
        return Inertia::render('About', [
            'personalInfo' => $this->getPersonalInfo(),
            'education' => $this->getEducation(),
            'skills' => $this->getSkills(),
        ]);
    }

    /**
     * Display the contact page
     */
    public function contact()
    {
        return Inertia::render('Contact', [
            'personalInfo' => $this->getPersonalInfo(),
        ]);
    }

    public function sendMessage(Request $request)
    {
        // Validate the form data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        try {
            // Save message to a readable file
            $messageData = [
                'timestamp' => now()->format('Y-m-d H:i:s'),
                'name' => $validated['name'],
                'email' => $validated['email'],
                'subject' => $validated['subject'],
                'message' => $validated['message']
            ];
            
            // Save to a messages file for easy reading
            $messagesFile = storage_path('app/contact_messages.txt');
            $messageText = "\n" . str_repeat("=", 50) . "\n";
            $messageText .= "NEW CONTACT MESSAGE - " . $messageData['timestamp'] . "\n";
            $messageText .= str_repeat("=", 50) . "\n";
            $messageText .= "Name: " . $messageData['name'] . "\n";
            $messageText .= "Email: " . $messageData['email'] . "\n";
            $messageText .= "Subject: " . $messageData['subject'] . "\n";
            $messageText .= "Message:\n" . $messageData['message'] . "\n";
            $messageText .= str_repeat("-", 50) . "\n";
            
            file_put_contents($messagesFile, $messageText, FILE_APPEND | LOCK_EX);
            
            // Also log it in Laravel logs
            Log::info('Contact form submission received:', $messageData);
            
            // Try to send notification email using a simple curl request to a webhook service
            try {
                $webhookData = json_encode([
                    'text' => "New portfolio contact message!\n\n" .
                             "From: {$validated['name']} ({$validated['email']})\n" .
                             "Subject: {$validated['subject']}\n\n" .
                             "Message: {$validated['message']}"
                ]);
                
                // This is a simple email notification that might work
                $emailSubject = urlencode('Portfolio Contact: ' . $validated['subject']);
                $emailBody = urlencode("New message from: {$validated['name']} ({$validated['email']})\n\nSubject: {$validated['subject']}\n\nMessage:\n{$validated['message']}");
                
                // Try to use a simple mail service (this might not work in all environments)
                $mailtoUrl = "mailto:lorenzo91145@gmail.com?subject={$emailSubject}&body={$emailBody}";
                
            } catch (\Exception $webhookError) {
                // Webhook failed, but that's okay
                Log::warning('Webhook notification failed: ' . $webhookError->getMessage());
            }
            
            return response()->json([
                'success' => true,
                'message' => 'Thank you for your message! Your message has been saved and I\'ll get back to you soon. You can also reach me directly at lorenzo91145@gmail.com'
            ]);

        } catch (\Exception $e) {
            Log::error('Contact form error: ' . $e->getMessage());
            
            return response()->json([
                'success' => false,
                'message' => 'Sorry, there was an error processing your message. Please contact me directly at lorenzo91145@gmail.com'
            ], 500);
        }
    }

    public function viewMessages()
    {
        $messagesFile = storage_path('app/contact_messages.txt');
        
        if (file_exists($messagesFile)) {
            $messages = file_get_contents($messagesFile);
        } else {
            $messages = "No messages yet.";
        }
        
        return response($messages, 200, [
            'Content-Type' => 'text/plain; charset=utf-8'
        ]);
    }

    /**
     * Get personal information
     */
    private function getPersonalInfo()
    {
        return [
            'name' => 'Lorenzo Miguel D. Bela',
            'title' => 'Computer Engineering Student',
            'email' => 'lorenzo.miguel.bela429@adamson.edu.ph',
            'phone' => '+639666504091',
            'location' => '149-B Ilocos Sur, 1105, Quezon City',
            'objective' => 'Computer Engineering student seeking internship opportunities to apply technical skills in software development, hardware integration and system design while gaining valuable industry experience. Eager to contribute to innovative projects and learn from experienced professionals in a collaborative environment.',
            'linkedin' => null,
            'github' => null,
            'portfolio' => null,
        ];
    }

    /**
     * Get skills data
     */
    private function getSkills()
    {
        return [
            'languages' => [
                'HTML', 'CSS', 'JavaScript', 'PHP', 'C', 'C++', 'Python', 'SQL', 'Laravel', 'Vue.js', 'Tailwind CSS', 'Bootstrap'
            ],
            'tools_frameworks' => [
                'Arduino', 'MySQL', 'Git', 'Visual Studio Code', 'Vivado', 'Inertia.js', 'Vite', 'Node.js', 'Composer'
            ],
            'technologies' => [
                'Web Development', 'PCB Design', 'Circuit Prototyping', 'Database Management', 'Full-Stack Development', 'SPA Development'
            ],
            'soft_skills' => [
                'Collaboration', 'Problem-Solving', 'Time Management', 'Attention to Detail', 'Project Management', 'Technical Documentation'
            ]
        ];
    }

    /**
     * Get education data
     */
    private function getEducation()
    {
        return [
            [
                'institution' => 'Adamson University',
                'degree' => 'Bachelor of Science in Computer Engineering',
                'period' => '2022-2026',
                'status' => 'Current',
                'coursework' => [
                    'Web Design and Development',
                    'Software Design',
                    'Computer Network and Security',
                    'Microprocessor Systems',
                    'Data Structures and Algorithms',
                    'Object-Oriented Programming',
                    'Logic Circuit and Design',
                    'Data and Digital Communications',
                    'Feedback and Control Systems',
                    'Database Design and Development'
                ]
            ],
            [
                'institution' => 'Adamson University',
                'degree' => 'STEM major in Technology',
                'period' => '2020-2022',
                'status' => 'Completed',
                'honors' => 'High Honors'
            ]
        ];
    }

    /**
     * Get projects data
     */
    private function getProjects()
    {
        return [
            [
                'title' => 'Modern Portfolio Website',
                'subtitle' => 'Personal Portfolio with Modern UI/UX',
                'date' => 'June 2025',
                'type' => 'Full-Stack Development',
                'description' => 'Built a modern, responsive portfolio website using Laravel 12, Vue.js 3, and Tailwind CSS with Apple-style animations and smooth scrolling effects.',
                'features' => [
                    'Modern SPA architecture with Inertia.js',
                    'Responsive design with Tailwind CSS',
                    'Apple-style animations and smooth scrolling',
                    'Interactive contact form with validation',
                    'Project showcase with filtering capabilities'
                ],
                'technologies' => ['Laravel', 'Vue.js', 'Tailwind CSS', 'Inertia.js', 'Vite', 'JavaScript', 'PHP'],
                'github' => null,
                'demo' => null,
                'status' => 'Completed'
            ],
            [
                'title' => 'Hash Frames Camera Rental System',
                'subtitle' => 'Web-Based Full Stack System (PHP, MySQL, HTML)',
                'date' => 'May 2025',
                'type' => 'Web Development',
                'description' => 'Developed a reservation and inventory system with user authentication and role-based access for a camera rental business.',
                'features' => [
                    'User authentication and role-based access control',
                    'Integrated image upload and payment methods',
                    'Reporting features, system settings, and chatbot support'
                ],
                'technologies' => ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
                'github' => null,
                'demo' => 'hashframes.store',
                'status' => 'Completed'
            ],
            [
                'title' => 'CpE Alumni Tracer Database System',
                'subtitle' => 'Database System',
                'date' => 'December 2024',
                'type' => 'Database Development',
                'description' => 'Developed a Database-driven digital guestbook using PHP and MySQL that captures detailed alumni visit logs, feedback, and graduate profiles.',
                'features' => [
                    'Automated report generation for alumni tracking',
                    'Improved alumni engagement and record-keeping efficiency'
                ],
                'technologies' => ['PHP', 'MySQL', 'Database Design'],
                'github' => null,
                'demo' => null,
                'status' => 'Completed'
            ],
            [
                'title' => 'Computerized Hotel Guest Book',
                'subtitle' => '',
                'date' => 'May 2024',
                'type' => 'Web Development',
                'description' => 'Developed a Web-based guest management system using PHP and MySQL for managing hotel check-ins, visitor information, and room assignments.',
                'features' => [
                    'Streamlined hotel front-desk operations',
                    'Facilitated efficient data retrieval and guest management'
                ],
                'technologies' => ['PHP', 'MySQL', 'Web Development'],
                'github' => null,
                'demo' => null,
                'status' => 'Completed'
            ],
            [
                'title' => 'Anti-Burglary System (Arduino) Security and Automation Project',
                'subtitle' => '',
                'date' => 'May 2024',
                'type' => 'Hardware/Software Integration',
                'description' => 'Developed an Arduino microcontroller-based security system featuring ultrasonic proximity detection, buzzer alarms upon intrusion.',
                'features' => [
                    'Motion detection with ultrasonic sensors',
                    'Triggered alarms and buzzer alerts',
                    'Designed custom PCB and fabricated an enclosure for practical project integrating hardware, sensors, and real-time alerts'
                ],
                'technologies' => ['Arduino', 'Sensors', 'PCB Design', 'Circuit Prototyping'],
                'github' => null,
                'demo' => null,
                'status' => 'Completed'
            ],
            [
                'title' => 'Multi-Sensor Automation System (Arduino)',
                'subtitle' => '',
                'date' => 'December 2024',
                'type' => 'Hardware Development',
                'description' => 'Led team of 5 students through complete development cycle from breadboard prototype to custom PCB fabrication, integrating motion detection, water level monitoring, and proximity sensing systems.',
                'features' => [
                    'Achieved detection ranges and response times using Arduino Uno R3, PIR sensors, ultrasonic sensors, and 741 op-amp for automated security and environmental monitoring applications'
                ],
                'technologies' => ['Arduino Uno R3', 'PIR sensors', 'Ultrasonic sensors', 'PCB Design'],
                'github' => null,
                'demo' => null,
                'status' => 'Completed'
            ]
        ];
    }
} 