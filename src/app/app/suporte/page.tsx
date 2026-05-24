'use client';

import { useState } from 'react';
import { Question, Chat, Phone, EnvelopeOpen, Book } from '@phosphor-icons/react';

export default function SuportePage() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'Como cadastro um novo animal?',
      answer: 'Vá para a página de Animais, clique em "Novo Animal" e preencha o formulário com as informações do animal. Todos os campos marcados com asterisco são obrigatórios.',
    },
    {
      id: 2,
      question: 'Como gero um relatório?',
      answer: 'Acesse a seção de Relatórios, selecione o tipo de relatório desejado e clique em "Gerar". O relatório será gerado em PDF e disponível para download.',
    },
    {
      id: 3,
      question: 'Qual é o limite de animais que posso cadastrar?',
      answer: 'Isso depende do seu plano. Verifique as configurações da sua conta para conhecer os limites do seu plano atual.',
    },
    {
      id: 4,
      question: 'Como funciona o lembrete de vacinação?',
      answer: 'O sistema monitora automaticamente as datas de vacinação e envia lembretes por email quando uma vacinação está próxima ou vencida.',
    },
    {
      id: 5,
      question: 'Posso exportar meus dados?',
      answer: 'Sim, você pode exportar dados na seção de Relatórios. Todos os dados podem ser exportados em formato CSV ou PDF.',
    },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-dark mb-2">Suporte</h1>
        <p className="text-dark/60">Encontre respostas e entre em contato conosco</p>
      </div>

      {/* Contact Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg transition-all cursor-pointer">
          <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
            <Chat size={24} className="text-brand-600" />
          </div>
          <h3 className="text-lg font-bold text-dark mb-2">Chat ao Vivo</h3>
          <p className="text-sm text-dark/60 mb-4">Fale com nosso time em tempo real</p>
          <button className="text-brand-600 hover:text-brand-700 font-semibold">Iniciar Chat</button>
        </div>

        <div className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg transition-all cursor-pointer">
          <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
            <EnvelopeOpen size={24} className="text-brand-600" />
          </div>
          <h3 className="text-lg font-bold text-dark mb-2">Email</h3>
          <p className="text-sm text-dark/60 mb-4">support@cownter.com</p>
          <button className="text-brand-600 hover:text-brand-700 font-semibold">Enviar Email</button>
        </div>

        <div className="bg-white rounded-xl border border-brand-100 p-6 hover:shadow-lg transition-all cursor-pointer">
          <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
            <Phone size={24} className="text-brand-600" />
          </div>
          <h3 className="text-lg font-bold text-dark mb-2">Telefone</h3>
          <p className="text-sm text-dark/60 mb-4">(11) 9999-9999</p>
          <button className="text-brand-600 hover:text-brand-700 font-semibold">Ligar</button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
            <Question size={20} className="text-brand-600" />
          </div>
          <h2 className="text-2xl font-bold text-dark">Perguntas Frequentes</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-xl border border-brand-100 overflow-hidden">
              <button
                onClick={() => setSelectedFaq(selectedFaq === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-brand-50 transition-colors text-left"
              >
                <p className="font-semibold text-dark">{faq.question}</p>
                <Book
                  size={20}
                  className={`text-brand-600 transition-transform flex-shrink-0 ${
                    selectedFaq === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {selectedFaq === faq.id && (
                <div className="p-6 bg-brand-50 border-t border-brand-100">
                  <p className="text-dark/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
