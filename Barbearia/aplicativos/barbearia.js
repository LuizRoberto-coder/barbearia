     // Inicializa o calendário
        flatpickr("#inputData", {
            locale: "pt",
            minDate: "today",
            dateFormat: "d/m/Y",
            disable: [
                function(date) {
                    // Desabilita domingos
                    return (date.getDay() === 0);
                }
            ]
        });

    document.addEventListener("DOMContentLoaded", function() {
        flatpickr.localize(flatpickr.l10ns.pt);
    });

        // Seleciona serviço ao clicar nos cards
        document.querySelectorAll('.servico-card').forEach(card => {
            card.addEventListener('click', function() {
                // Remove seleção de todos os cards
                document.querySelectorAll('.servico-card').forEach(c => {
                    c.classList.remove('selecionado');
                });
                
                // Adiciona seleção ao card clicado
                this.classList.add('selecionado');
                
                // Atualiza o select no formulário
                const serviceId = this.getAttribute('data-service-id');
                const serviceName = this.getAttribute('data-service-name');
                const servicePrice = this.getAttribute('data-service-price');
                
                document.getElementById('selectServico').value = `${serviceName} - R$${servicePrice}`;
                
                document.getElementById('agendar').scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Formulário de agendamento
        document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const servico = document.getElementById('selectServico').value;
            const barbeiro = document.getElementById('selectBarbeiro').value;
            const data = document.getElementById('inputData').value;
            const hora = document.getElementById('inputHora').value;
            
            if (!servico || !data || !hora) {
                alert('Por favor, selecione pelo menos o serviço, data e horário.');
                return;
            }
            
            // Formata a mensagem para o WhatsApp
            const mensagem = `*NOVO AGENDAMENTO*%0A%0A*Nome:* ${nome}%0A*Serviço:* ${servico}%0A*Barbeiro:* ${barbeiro || 'Qualquer barbeiro'}%0A*Data:* ${data}%0A*Horário:* ${hora}`;
            
            // Abre o WhatsApp
            window.open(`https://wa.me/5582996148084?text=${mensagem}`, '_blank');
            
            this.reset();
            
            alert('Agora você será redirecionado para o WhatsApp para confirmar seu agendamento!');
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    history.pushState(null, null, targetId);
                }
            });
        });