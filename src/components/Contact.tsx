import { useState, useEffect } from 'react';
import { Mail, Linkedin, X, Edit } from 'lucide-react';

interface ContactInfo {
  email: string;
  linkedin: string;
}

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: '',
    linkedin: ''
  });
  const [formData, setFormData] = useState<ContactInfo>({
    email: '',
    linkedin: ''
  });

  useEffect(() => {
    setIsVisible(true);
    loadContactInfo();
  }, []);

  const loadContactInfo = () => {
    const stored = localStorage.getItem('contactInfo');
    if (stored) {
      const info = JSON.parse(stored);
      setContactInfo(info);
      setFormData(info);
    }
  };

  const handleOpenModal = () => {
    setFormData(contactInfo);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    localStorage.setItem('contactInfo', JSON.stringify(formData));
    setContactInfo(formData);
    setIsModalOpen(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-8 px-6"
    >
      <div className="max-w-4xl w-full">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-lg mb-12 text-center" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Let's connect and discuss opportunities
          </p>

          <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
            <div className="flex flex-col items-center gap-8">
              {contactInfo.email && (
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105 w-full max-w-md"
                  style={{ backgroundColor: 'rgba(82, 149, 228, 0.1)' }}
                >
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}>
                    <Mail className="text-white" size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Email</div>
                    <div className="text-white font-medium">{contactInfo.email}</div>
                  </div>
                </a>
              )}

              {contactInfo.linkedin && (
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-105 w-full max-w-md"
                  style={{ backgroundColor: 'rgba(82, 149, 228, 0.1)' }}
                >
                  <div className="p-3 rounded-full" style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}>
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>LinkedIn</div>
                    <div className="text-white font-medium">View Profile</div>
                  </div>
                </a>
              )}

              <button
                onClick={handleOpenModal}
                className="flex items-center gap-2 px-6 py-3 text-white rounded-lg font-medium transition-all hover:scale-105 mt-4"
                style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}
              >
                <Edit size={20} />
                {contactInfo.email || contactInfo.linkedin ? 'Edit Contact Details' : 'Add Contact Details'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="rounded-2xl p-8 max-w-md w-full relative" style={{ backgroundColor: 'rgba(10, 17, 30, 1)' }}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <X className="text-white" size={20} />
            </button>

            <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border outline-none focus:border-opacity-100 transition-colors text-white"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(82, 149, 228, 0.3)'
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 rounded-lg border outline-none focus:border-opacity-100 transition-colors text-white"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(82, 149, 228, 0.3)'
                  }}
                />
              </div>

              <button
                onClick={handleSave}
                className="w-full px-6 py-3 text-white rounded-lg font-medium transition-all hover:opacity-90 mt-6"
                style={{ backgroundColor: 'rgba(82, 149, 228, 1)' }}
              >
                Save Contact Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
