        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('active');
        });

        // Initialize flatpickr
        flatpickr("#inputData", {
            minDate: "today",
            dateFormat: "d/m/Y",
            locale: "pt" // Brazilian Portuguese locale
        });

        // Service card selection
        document.querySelectorAll('.servico-card').forEach(card => {
            card.addEventListener('click', function() {
                // Remove selected class from all cards
                document.querySelectorAll('.servico-card').forEach(c => {
                    c.classList.remove('selecionado');
                });
                
                // Add selected class to clicked card
                this.classList.add('selecionado');
                
                // Update service dropdown
                const serviceId = this.getAttribute('data-service-id');
                const serviceName = this.getAttribute('data-service-name');
                const servicePrice = this.getAttribute('data-service-price');
                
                document.getElementById('selectServico').value = `${serviceName} - R$${servicePrice}`;
            });
        });

        // Form submission
        document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nome = document.getElementById('nome').value;
            const servico = document.getElementById('selectServico').value;
            const barbeiro = document.getElementById('selectBarbeiro').value;
            const data = document.getElementById('inputData').value;
            const hora = document.getElementById('inputHora').value;
            
            // Simple validation
            if (!nome || !servico || !data || !hora) {
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }
            
            // Create confirmation message
            let mensagem = `✅ Agendamento Confirmado!\n\n`;
            mensagem += `Nome: ${nome}\n`;
            mensagem += `Serviço: ${servico}\n`;
            if (barbeiro) mensagem += `Barbeiro: ${barbeiro}\n`;
            mensagem += `Data: ${data}\n`;
            mensagem += `Horário: ${hora}\n\n`;
            mensagem += `Obrigado por agendar conosco!`;
            
            // Show confirmation
            alert(mensagem);
            
            // Reset form
            this.reset();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        <script>
    // Form submission
    document.getElementById('agendamentoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const nome = document.getElementById('nome').value;
        const servico = document.getElementById('selectServico').value;
        const barbeiro = document.getElementById('selectBarbeiro').value || 'Qualquer barbeiro';
        const data = document.getElementById('inputData').value;
        const hora = document.getElementById('inputHora').value;
        
        // Simple validation
        if (!nome || !servico || !data || !hora) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Create WhatsApp message
        let mensagem = `*AGENDAMENTO BARBEARIA MODERNA*%0A%0A`;
        mensagem += `*Nome:* ${nome}%0A`;
        mensagem += `*Serviço:* ${servico}%0A`;
        mensagem += `*Barbeiro:* ${barbeiro}%0A`;
        mensagem += `*Data:* ${data}%0A`;
        mensagem += `*Horário:* ${hora}%0A%0A`;
        mensagem += `Confirmo meu agendamento para a data e horário acima.`;
        
        // WhatsApp API link
        const whatsappLink = `https://wa.me/5582996148084?text=${mensagem}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappLink, '_blank');
        
        // Reset form
        this.reset();
    });

