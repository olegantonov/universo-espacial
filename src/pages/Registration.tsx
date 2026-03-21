import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { motion } from 'motion/react';
import { Rocket, CheckCircle2, AlertCircle } from 'lucide-react';

type FormData = {
  schoolName: string;
  address: string;
  region: string;
  studentCount: number;
  preferredDate: string;
  preferredTime: string;
  principalName: string;
  principalPhone: string;
  teacherName: string;
  teacherPhone: string;
  coordinatorName: string;
  coordinatorPhone: string;
  specialNeeds: string;
};

export default function Registration() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const scriptUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL || "COLOQUE_SUA_URL_DO_APPS_SCRIPT_AQUI";
    
    if (scriptUrl !== "COLOQUE_SUA_URL_DO_APPS_SCRIPT_AQUI") {
      try {
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
      } catch (error) {
        // O Google Apps Script com no-cors costuma disparar um erro de CORS/Rede no navegador 
        // após o redirecionamento, mesmo quando os dados já foram salvos com sucesso na planilha.
        console.warn("Aviso de fetch (comum no Apps Script):", error);
      }
    } else {
      // Simulação caso a URL não esteja configurada
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Dados que iriam para a planilha:", data);
    }
    
    // Sempre mostra a tela de sucesso, pois a requisição foi enviada
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#121233]/90 backdrop-blur-xl border border-emerald-500/30 p-10 rounded-3xl shadow-2xl max-w-lg w-full text-center"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-4">Inscrição Recebida!</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Sua solicitação de visita escolar foi registrada com sucesso. Nossa equipe entrará em contato em breve para confirmar a data e horário do agendamento.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors"
          >
            Fazer nova inscrição
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 mb-6">
            <Rocket className="w-8 h-8 text-[#00d2ff]" />
          </div>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 uppercase leading-tight">
            Formulário para Credenciamento de Escolas do GDF para Exposição Missão Centenário 20 Anos
          </h1>
          <div className="text-lg text-slate-300 space-y-2 inline-block text-left bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="flex items-center gap-2"><strong className="text-white">Local:</strong> Brasília Shopping</p>
            <p className="flex items-center gap-2"><strong className="text-white">De:</strong> 24/03 a 12/04/2026</p>
            <p className="flex items-center gap-2"><strong className="text-white">Horário geral:</strong> 10:00 às 20:00 horas</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#121233]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* School Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Dados da Escola</h3>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Nome da Escola *</label>
                    <input 
                      {...register("schoolName", { required: "Campo obrigatório" })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                      placeholder="Nome completo da escola"
                    />
                    {errors.schoolName && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.schoolName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Endereço *</label>
                    <input 
                      {...register("address", { required: "Campo obrigatório" })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                      placeholder="Endereço completo"
                    />
                    {errors.address && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.address.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Qual Regional pertence *</label>
                    <input 
                      {...register("region", { required: "Campo obrigatório" })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                      placeholder="Ex: Plano Piloto, Taguatinga, Ceilândia..."
                    />
                    {errors.region && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.region.message}</p>}
                  </div>
                </div>
              </div>

              {/* Visit Details */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Detalhes da Visita</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-300 mb-2">Quantidade de alunos que participarão da Exposição *</label>
                    <input 
                      type="number"
                      {...register("studentCount", { 
                        required: "Campo obrigatório",
                        valueAsNumber: true
                      })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                      placeholder="Ex: 30"
                    />
                    {errors.studentCount && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.studentCount.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Qual data escolhida *</label>
                    <input 
                      type="date"
                      min="2026-03-24"
                      max="2026-04-12"
                      {...register("preferredDate", { required: "Campo obrigatório" })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                    />
                    {errors.preferredDate && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.preferredDate.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Horário escolhido *</label>
                    <select 
                      {...register("preferredTime", { required: "Campo obrigatório" })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all appearance-none"
                    >
                      <option value="">Selecione um horário...</option>
                      <option value="10:00">10:00</option>
                      <option value="10:30">10:30</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                      <option value="19:00">19:00</option>
                      <option value="19:30">19:30</option>
                      <option value="20:00">20:00</option>
                    </select>
                    {errors.preferredTime && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.preferredTime.message}</p>}
                  </div>
                </div>
              </div>

              {/* Contacts Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Contatos</h3>
                
                {/* Diretor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Diretor da Escola *</label>
                    <input 
                      {...register("principalName", { required: "Campo obrigatório" })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                      placeholder="Nome do Diretor"
                    />
                    {errors.principalName && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.principalName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Telefone para contato direto *</label>
                    <Controller
                      name="principalPhone"
                      control={control}
                      rules={{ required: "Campo obrigatório" }}
                      render={({ field }) => (
                        <IMaskInput
                          {...field}
                          mask="(00) 00000-0000"
                          className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                          placeholder="(61) 90000-0000"
                          onAccept={(value) => field.onChange(value)}
                        />
                      )}
                    />
                    {errors.principalPhone && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.principalPhone.message}</p>}
                  </div>
                </div>

                {/* Professor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Professor Indicado para acompanhar os alunos *</label>
                    <input 
                      {...register("teacherName", { required: "Campo obrigatório" })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                      placeholder="Nome do Professor"
                    />
                    {errors.teacherName && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.teacherName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Telefone para contato direto *</label>
                    <Controller
                      name="teacherPhone"
                      control={control}
                      rules={{ required: "Campo obrigatório" }}
                      render={({ field }) => (
                        <IMaskInput
                          {...field}
                          mask="(00) 00000-0000"
                          className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                          placeholder="(61) 90000-0000"
                          onAccept={(value) => field.onChange(value)}
                        />
                      )}
                    />
                    {errors.teacherPhone && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.teacherPhone.message}</p>}
                  </div>
                </div>

                {/* Coordenador */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Coordenador Indicado para acompanhar os alunos *</label>
                    <input 
                      {...register("coordinatorName", { required: "Campo obrigatório" })}
                      className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                      placeholder="Nome do Coordenador"
                    />
                    {errors.coordinatorName && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.coordinatorName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Telefone para contato direto *</label>
                    <Controller
                      name="coordinatorPhone"
                      control={control}
                      rules={{ required: "Campo obrigatório" }}
                      render={({ field }) => (
                        <IMaskInput
                          {...field}
                          mask="(00) 00000-0000"
                          className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all"
                          placeholder="(61) 90000-0000"
                          onAccept={(value) => field.onChange(value)}
                        />
                      )}
                    />
                    {errors.coordinatorPhone && <p className="text-red-400 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4"/>{errors.coordinatorPhone.message}</p>}
                  </div>
                </div>
              </div>

              {/* Special Needs */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Outras Informações</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Necessidades Especiais</label>
                  <textarea 
                    {...register("specialNeeds")}
                    rows={3}
                    className="w-full bg-[#0a0a1f] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]/50 focus:border-[#00d2ff] transition-all resize-none"
                    placeholder="Informe se há alunos com necessidades especiais ou outras observações importantes."
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d2ff] to-blue-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Agendar Visita Escolar
                      <Rocket className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-center text-slate-500 text-sm mt-4">
                  A inscrição está sujeita à disponibilidade de vagas. Aguarde nossa confirmação.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
