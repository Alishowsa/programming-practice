import java.util.ArrayList;
import java.util.List;


interface PlacarObserver {
    void atualizar(String timeCasa, int golsCasa, String timeVisitante, int golsVisitante);
}


class Partida {
    private String timeCasa;
    private String timeVisitante;
    private int golsCasa = 0;
    private int golsVisitante = 0;
    private List<PlacarObserver> observers = new ArrayList<>();

    public Partida(String timeCasa, String timeVisitante) {
        this.timeCasa = timeCasa;
        this.timeVisitante = timeVisitante;
    }

    public void adicionarObserver(PlacarObserver o) {
        this.observers.add(o);
    }

    public void removerObserver(PlacarObserver o) {
        this.observers.remove(o);
    }

    public void golCasa() {
        this.golsCasa++;
        notificarObservers(); 
    }

    public void golVisitante() {
        this.golsVisitante++;
        notificarObservers(); 
    }

    private void notificarObservers() {
        for (PlacarObserver o : this.observers) {
            o.atualizar(this.timeCasa, this.golsCasa, this.timeVisitante, this.golsVisitante);
        }
    }
}

class TelaoEstadio implements PlacarObserver {
    @Override
    public void atualizar(String timeCasa, int golsCasa, String timeVisitante, int golsVisitante) {
        System.out.println("[Telão] " + timeCasa + " " + golsCasa + " x " + golsVisitante + " " + timeVisitante);
    }
}

class AppNotificacao implements PlacarObserver {
    @Override
    public void atualizar(String timeCasa, int golsCasa, String timeVisitante, int golsVisitante) {
        System.out.println("[App] Gol na partida! Placar atual: " + golsCasa + " x " + golsVisitante);
    }
}


class NarradorRadio implements PlacarObserver {
    @Override
    public void atualizar(String timeCasa, int golsCasa, String timeVisitante, int golsVisitante) {
        System.out.println("[Rádio] É GOOOL! " + timeCasa + " " + golsCasa + " x " + golsVisitante + " " + timeVisitante + "!");
    }
}


class Main {
    public static void main(String[] args) {
        
        Partida partida = new Partida("Águias", "Leões");
        partida.adicionarObserver(new TelaoEstadio());
        partida.adicionarObserver(new AppNotificacao());

        partida.golCasa();
        partida.golVisitante();

    
        System.out.println();
        partida.adicionarObserver(new NarradorRadio());
        partida.golCasa();
    }
}
