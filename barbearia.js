        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('active');
        });

        flatpickr("#inputData", {
            minDate: "today",
            dateFormat: "d/m/Y",
            locale: "pt" 
        });

        // Service card selection
        document.querySelectorAll('.servico-card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.servico-card').forEach(c => {
                    c.classList.remove('selecionado');
                });
                
                this.classList.add('selecionado');
                
                const serviceId = this.getAttribute('data-service-id');
                const serviceName = this.getAttribute('data-service-name');
                const servicePrice = this.getAttribute('data-service-price');
                
                document.getElementById('selectServico').value = `${serviceName} - R$${servicePrice}`;
            });
        });
            
    document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const servico = document.getElementById('selectServico').value;
        const barbeiro = document.getElementById('selectBarbeiro').value || 'Qualquer barbeiro';
        const data = document.getElementById('inputData').value;
        const hora = document.getElementById('inputHora').value;
        
        if (!nome || !servico || !data || !hora) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        let mensagem = `*AGENDAMENTO BARBEARIA MODERNA*%0A%0A`;
        mensagem += `*Nome:* ${nome}%0A`;
        mensagem += `*Serviço:* ${servico}%0A`;
        mensagem += `*Barbeiro:* ${barbeiro}%0A`;
        mensagem += `*Data:* ${data}%0A`;
        mensagem += `*Horário:* ${hora}%0A%0A`;
        mensagem += `Confirmo meu agendamento para a data e horário acima.`;
        
        // WhatsApp API link
        const whatsappLink = `https://wa.me/5582996148084?text=${mensagem}`;
        
        window.open(whatsappLink, '_blank');
        
        this.reset();
    });

